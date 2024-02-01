import { useQuery } from "@tanstack/react-query";
import getData, {
    getAllVehicleData,
    getDataVehicleFpace,
    getDataVehicleFtype,
    getDataVehicleIpace,
    getDataVehicleXe,
} from "../../api/index";
import "./style.scss";
import { useState } from "react";

export default function VehicleList() {
    const [browseMore, setBrowseMore] = useState(false);
    const {
        isPendingcarDataFpace,
        data: carDataFpace,
        error: errorcarDataFpace,
    } = useQuery({ queryKey: ["carFpace"], queryFn: getDataVehicleFpace });
    const {
        isPendingcarDataFtype,
        data: carDataFtype,
        error: errorcarDataFtype,
    } = useQuery({ queryKey: ["carFtype"], queryFn: getDataVehicleFtype });
    const {
        isPendingcarDataXe,
        data: carDataXe,
        error: errorcarDataXe,
    } = useQuery({ queryKey: ["carXe"], queryFn: getDataVehicleXe });

    const {
        isPending,
        data: carDataXj,
        error,
    } = useQuery({ queryKey: ["carXj"], queryFn: getData });

    const {
        isPending: isPendingcarDataIpace,
        data: carDataIpace,
        error: errorcarDataIpace,
    } = useQuery({ queryKey: ["carIpace"], queryFn: getDataVehicleIpace });
    const {
        isPending: isPendingcarDataAll,
        data: carDataAll,
        error: errorcarDataAll,
    } = useQuery({
        queryKey: ["allCars"],
        queryFn: getAllVehicleData,
    });

    if (
        isPending ||
        isPendingcarDataIpace ||
        isPendingcarDataAll ||
        isPendingcarDataXe ||
        isPendingcarDataFtype ||
        isPendingcarDataFpace
    )
        return "loading...";
    if (
        error ||
        errorcarDataIpace ||
        errorcarDataAll ||
        errorcarDataXe ||
        errorcarDataFtype ||
        errorcarDataFpace
    )
        return "an error has occured in your data fetch  ";

    // Destructured data Meta Car Info --
    const makeCarDataFpaceMeta = Object.keys(carDataFpace.meta);
    const makeCarDataFtypeMeta = Object.keys(carDataFtype.meta);
    const makeCarDataXeMeta = Object.keys(carDataXe.meta);
    const carDataIpaceMeta = Object.keys(carDataIpace.meta);

    const regionalTranslation = "from";

    //   console.table(carDataXj);

    let handleToggleMoreData = () => {
        setBrowseMore((prevCheck) => !prevCheck);
    };
    return (
        <div data-testid="carTest1">
            <p>List of vehicles will be displayed here</p>
            <section className="UI__card__grid">
                <article className="UI__card">
                    <div className="UI__card__hero-img">
                        <img
                            src="images/1x1/fpace_k17.jpg"
                            alt={`${carDataFpace.id}`}
                        />
                    </div>
                    <div className="UI__card__hero-titles">
                        <div className="UI__card__hero-titles__product-title">
                            {carDataFpace.id}
                        </div>
                        <div className="UI__card__hero-titles__price">
                            {regionalTranslation} {carDataFpace.price}
                        </div>
                        <div className="UI__card__hero-titles__desc">
                            {carDataFpace.description}
                        </div>
                    </div>
                    <div className="UI__card__footer">
                        <details>
                            <summary>Details</summary>

                            <div>
                                <div>{makeCarDataFpaceMeta.join(", ")} </div>
                                <div>{carDataFpace.meta.passengers}</div>
                                <div>
                                    {Object.values(
                                        carDataFpace.meta.drivetrain
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {Object.values(
                                        carDataFpace.meta.bodystyles
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {carDataFpace.meta.emissions.template}{" "}
                                    {carDataFpace.meta.emissions.value}
                                </div>
                            </div>
                        </details>
                    </div>
                </article>

                <article className="UI__card">
                    <div className="UI__card__hero-img">
                        <img
                            src="images/1x1/ftype_k17.jpg"
                            alt={`${carDataFtype.id}`}
                        />
                    </div>
                    <div className="UI__card__hero-titles">
                        <div className="UI__card__hero-titles__product-title">
                            {carDataFtype.id}
                        </div>
                        <div className="UI__card__hero-titles__price">
                            {regionalTranslation} {carDataFtype.price}
                        </div>
                        <div className="UI__card__hero-titles__desc">
                            {carDataFtype.description}
                        </div>
                    </div>

                    <div className="UI__card__footer">
                        <details>
                            <summary>Details</summary>

                            <div>
                                <div>{makeCarDataFtypeMeta.join(", ")} </div>
                                <div>{carDataFtype.meta.passengers}</div>
                                <div>
                                    {Object.values(
                                        carDataFtype.meta.drivetrain
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {Object.values(
                                        carDataFtype.meta.bodystyles
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    <div>
                                        {carDataFtype.meta.emissions.template}{" "}
                                        {carDataFtype.meta.emissions.value}
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </article>
                <article className="UI__card">
                    <div className="UI__card__hero-img">
                        <img
                            src="images/1x1/ipace_k21.jpg"
                            alt={`${carDataIpace.id}`}
                        />
                    </div>
                    <div className="UI__card__hero-titles">
                        <div className="UI__card__hero-titles__product-title">
                            {carDataIpace.id}
                        </div>
                        <div className="UI__card__hero-titles__price">
                            {regionalTranslation} {carDataIpace.price}
                        </div>
                        <div className="UI__card__hero-titles__desc">
                            {carDataIpace.description}
                        </div>
                    </div>
                    <div className="UI__card__footer">
                        <details>
                            <summary>Details</summary>
                            <div>
                                <div>{carDataIpaceMeta.join(", ")} </div>
                                <div>{carDataIpace.meta.passengers}</div>
                                <div>
                                    {Object.values(
                                        carDataIpace.meta.drivetrain
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {Object.values(
                                        carDataIpace.meta.bodystyles
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {carDataIpace.meta.emissions.template}{" "}
                                    {carDataIpace.meta.emissions.value}
                                </div>
                            </div>{" "}
                        </details>
                    </div>
                </article>

                <article className="UI__card">
                    <div className="UI__card__hero-img">
                        <img
                            src="images/1x1/xe_k17.jpg"
                            alt={`${carDataXe.id}`}
                        />
                    </div>
                    <div className="UI__card__hero-titles">
                        <div className="UI__card__hero-titles__product-title">
                            {carDataXe.id}
                        </div>
                        <div className="UI__card__hero-titles__price">
                            {regionalTranslation} {carDataXe.price}
                        </div>
                        <div className="UI__card__hero-titles__desc">
                            {carDataXe.description}
                        </div>
                    </div>

                    <div className="UI__card__footer">
                        <details>
                            <summary>Details</summary>

                            <div>
                                <div>{makeCarDataXeMeta.join(", ")} </div>
                                <div>{carDataXe.meta.passengers}</div>
                                <div>
                                    {Object.values(
                                        carDataXe.meta.drivetrain
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                                <div>
                                    {Object.values(
                                        carDataXe.meta.bodystyles
                                    ).map((key) => (
                                        <div key={key}>{key.toString()}</div>
                                    ))}
                                </div>
                            </div>
                            <div />
                            <div>
                                <div>
                                    {carDataXe.meta.emissions.template}{" "}
                                    {carDataXe.meta.emissions.value}
                                </div>
                            </div>
                        </details>
                    </div>
                </article>
            </section>

            <section className="UI__utility__center-content">
                <button onClick={handleToggleMoreData}>
                    {browseMore ? <>no thanks</> : <>show me more</>}
                </button>

                <div
                    className={`${
                        browseMore ? "animate__animated animate__fadeIn" : " "
                    }`}
                >
                    {" "}
                    {browseMore ? (
                        <>
                            {carDataAll.map((data) => {
                                return (
                                    <div key={data.id}>
                                        {data.id}
                                        <div>{data.modelYear}</div>
                                        <div>
                                            <img
                                                src={data.media[0].url}
                                                alt={`${data.id} ${data.modelYear}`}
                                            />

                                            <img
                                                src={data.media[1].url}
                                                alt={`${data.id} ${data.modelYear}`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <> </>
                    )}
                </div>
            </section>
        </div>
    );
}
